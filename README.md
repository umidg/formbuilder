
# Demo  https://formbuilder-umid.herokuapp.com/

### Technologies Used  
- React js
React js is used for front end to build form builder. Libraries used are, bootstrap, react-bootstrap, react-router and axios (to fetch datas from api).  
**Basic routes**  
/- Main page where one can build a new form  
/allforms- View all the forms built  
/responses - View filled forms  

- Node/Express js  
Node js handles all the calls to the api, including react routing. There are four basic calls excluding react  routes.
**Basic Routes**  
/getall- To fetch all the forms built  
/getallresponse- To fetch all the filled forms  
/saveform- To save built forms  
/saveresponse- To save each filled forms  

- Heroku  
The app has been built and deployed to heroku cloud host. For the database, mongoDB is used which was provided by MLabs adds-on.

- JSON format


    `[
      { "type": "static", "value": "", "edit": true },
      { "type": "text", "value": "", "label": "", "edit": true },
      { "type": "radio", "values": [""], "value": "", "edit": true },
      { "type": "dropdown", "values": [""], "value": "", "edit": true }
    ]`

### Application Flow  
- Main page:   

Top page contains four buttons namely,  
1.  Upload JSON: We can upload json file which is in the format of the application.  
2.  Download JSON: We can download the built forms.  
3. All Forms: To view every forms built  
4. Responses: To view every responses from forms.  

Right of the page conatins two buttons namely,
1. Add- To add any of the four input forms (Static, text, Radio Buttons, and Drop Down)
2. Publish - To publish the form, for filling and viewing responses.

### Future Inhancements
- Direct viewing of any forms and its responses by properly using unique id.
- Additional authentications for the above enhancements.






