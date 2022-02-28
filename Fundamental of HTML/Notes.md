The main HTML5 tag helps search engines and other developers find the main content of your page.

add images to your website by using the img element, and point to a specific image's URL using the src attribute.
All img elements must have an alt attribute. The text inside an alt attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.
Ideally the alt attribute should not contain special characters unless needed.

You can use a (anchor) elements to link to content outside of your web page.
a elements need a destination web address called an href attribute. They also need anchor text.
a (anchor) elements can also be used to create internal links to jump to different sections within a webpage.
To create an internal link, you assign a link's href attribute to a hash symbol # plus the value of the id attribute for the element that you want to internally link to, usually further down the page. You then need to add the same id attribute to the element you are linking to. An id is an attribute that uniquely describes an element.
target="_blank" attribute from the anchor tag since this causes the linked document to open in a new window tab.

input elements are a convenient way to get input from your user.
You can build web forms that actually submit data to a server using nothing more than pure HTML. You can do this by specifying an action attribute on your form element.
 if you wanted to make a text input field required, you can just add the attribute required within your input element, like this: <input type="text" required>

 input : text, radio, checkbox

 <label for="indoor">
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
</label>
<label for="outdoor">
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
</label>
Here, you have two radio inputs. When the user submits the form with the indoor option selected, the form data will include the line: indoor-outdoor=indoor. This is from the name and value attributes of the "indoor" input.

If you omit the value attribute, the submitted form data uses the default value, which is on. In this scenario, if the user clicked the "indoor" option and submitted the form, the resulting form data would be indoor-outdoor=on, which is not useful. So the value attribute needs to be set to something to identify the option.

You can set a checkbox or radio button to be checked by default using the checked attribute.


The div element, also known as a division element, is a general purpose container for other elements.
The div element is probably the most commonly used HTML element of all.


There are several benefits to using id attributes: You can use an id to style a single element and later you'll learn that you can use them to select and modify specific elements with JavaScript.
id attributes should be unique. Browsers won't enforce this, but it is a widely agreed upon best practice. So please don't give more than one element the same id attribute.
One cool thing about id attributes is that, like classes, you can style them using CSS.
However, an id is not reusable and should only be applied to one element. An id also has a higher specificity (importance) than a class so if both are applied to the same element and have conflicting styles, the styles of the id will be applied.

**in CSS, "." for class, "#" for id

margin-top, margin-right, margin-bottom, and margin-left properties.
padding-top, padding-right, padding-bottom, and padding-left properties.

[attr=value] attribute selector to style the checkboxes in CatPhotoApp. This selector matches and styles elements with a specific attribute value.
[type='radio'] {
  margin: 20px 0px 20px 0px;
}

use !important to specify the main CSS

:root is a pseudo-class selector that matches the root element of the document, usually the html element. By creating your variables in :root, they will be available globally and can be accessed from any other selector in the style sheet.

position: absolute | relative | fixed | sticky