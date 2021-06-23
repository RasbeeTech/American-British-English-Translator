# American-British-English-Translator
API service for translating American/British english.  

### Purpose:
Practice implementing unit and integrated Mocha Chai-HTTP testing.  
 
 ### Usage examples:
 locale options: 'american-to-british' or 'british-to-american'  
```
POST /api/translate {text: text_to_translate locale: locale}  
```
### Return example:
```
{text: original_text, translation: translated_text}  
```
