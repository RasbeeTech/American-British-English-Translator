const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    suite('POST request to /api/translate', () => {
        test('1. Translation with text and locale fields', () => {
            chai.request(server)
                .post('/api/translate')
                .type('form')
                .send({
                    text: 'First, caramelise the onions.',
                    locale: 'british-to-american'
                })
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.property(res.body, 'text', 'Should have a text property');
                    assert.property(res.body, 'translation', 'Should have a translation property');
                });
        });
        test('2. Translation with text and invalid locale field', () => {
            chai.request(server)
                .post('/api/translate')
                .type('form')
                .send({
                    text: 'First, caramelise the onions.',
                    locale: 'british'
                })
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.property(res.body, 'error', 'Should receive an error object');
                    assert.equal(res.body.error, 'Invalid value for locale field')
                });
        });
        test('3. Translation with missing text field', () => {
            chai.request(server)
                .post('/api/translate')
                .type('form')
                .send({
                    locale: 'british-to-american'
                })
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.property(res.body, 'error', 'Should receive an error object');
                    assert.equal(res.body.error, 'Required field(s) missing')
                });
        });
        test('4. Translation with missing text field', () => {
            chai.request(server)
                .post('/api/translate')
                .type('form')
                .send({
                    text: 'First, caramelise the onions.',
                })
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.property(res.body, 'error', 'Should receive an error object');
                    assert.equal(res.body.error, 'Required field(s) missing')
                });
        });
        test('5. Translation with empty text', () => {
            chai.request(server)
                .post('/api/translate')
                .type('form')
                .send({
                    text: '',
                    locale: 'british-to-american'
                })
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.property(res.body, 'error', 'Should receive an error object');
                    assert.equal(res.body.error, 'No text to translate');
                });
        });
        test('6. Translation with text that needs no translation', () => {
            chai.request(server)
                .post('/api/translate')
                .type('form')
                .send({
                    text: 'Mangoes are my favorite fruit',
                    locale: 'british-to-american'
                })
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.property(res.body, 'text', 'Should have a text property');
                    assert.property(res.body, 'translation', 'Should have a translation property');
                    assert.equal(res.body.translation, 'Everything looks good to me!')
                });
        });
    });
});
