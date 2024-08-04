<script>
import { ref, onMounted, watch } from "vue";
import { mapActions } from "vuex";
import { useStore } from "vuex";

export default {
  setup() {
    onMounted(() => {});
    return {
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <h1>Tattoo Request</h1>
    <div style="padding: 20px; margin-bottom: 20px;">In order to help me streamline the booking process please fill out any relevent information I may need for your appointment/consultation below. If there is a question you do not understand or are not sure how to answer, give a best guess and let me know at the end how I can help.</div>
    <div class="container">
    <form
      class="form"
      name="appointment-request"
      method="post"
      enctype="multipart/form-data"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="ask-question" />
      <label for="name">Name</label>
    <input type="text" id="name" name="name" >

    <label for="pronouns">Pronouns</label>
    <input type="text" id="pronouns" name="pronouns" >

    <label for="email">Email</label>
    <input type="email" id="email" name="email" >

    <label for="phone">Phone Number</label>
    <input type="text" id="phone" name="phone" placeholder="(000) 000-0000" >

    <label for="placement">Tattoo Placement</label>
    <input type="text" id="placement" name="placement" >

    <fieldset>
    <legend>Is this a Coverup?</legend>
    <p>
      <label>
        <input type="radio" name="coverup" value="Yes"> Yes
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="coverup" value="No"> No
      </label>
    </p>
  </fieldset>
<!-- 
    <label for="placement_photo">Tattoo Placement Photo</label>
    <input type="file" id="placement_photo" name="placement_photo" >

    <div style="margin-bottom: 16px; background-color: rgb(255, 138, 125, .5); padding: 20px; border: 1px solid #ccc;border-radius: 4px; box-sizing: border-box;">
        If there is a cover-up involved, please take a well-lit photo of the tattoo or scar that you would like covered as well as some area around it. Also please note how old the tattoo/scar is in the description box.
    </div>

    <label for="size">Tattoo Size(in inches)</label>
    <input type="text" id="size" name="size" >

    <label for="style">Tattoo Style</label>
    <input type="text" id="style" name="style" >

    <label for="color">Color</label>
    <select id="color" name="color">
      <option value="color">Full Color</option>
      <option value="bg">Black & Gray</option>
    </select>

    <label for="desciption">Tattoo Desciption</label>
    <textarea id="desciption" name="desciption" placeholder="Please briefly describe your tattoo idea.." style="height:200px"></textarea>

    <label for="reference1">Reference 1</label>
    <input type="file" name="reference1" />

    <label for="reference2" >Reference 2</label>
    <input type="file" name="reference2" />

    <label for="reference3" >Reference 3</label>
    <input type="file" name="reference3" />

    <label for="preferred_days">Preferred Days</label>
    <fieldset style="column-count: 2;">
        <div>
        <input type="checkbox" name="monday">
        <label for="monday">Monday</label>
        </div>

        <div>
        <input type="checkbox" name="tuesday">
        <label for="tuesday">Tuesday</label>
        </div>

        <div>
        <input type="checkbox" name="wednesday">
        <label for="wednesday">Wednesday</label>
        </div>

        <div>
        <input type="checkbox" name="thursday">
        <label for="thursday">Thursday</label>
        </div>

        <div>
        <input type="checkbox" name="friday">
        <label for="friday">Friday</label>
        </div>
        <div>
        <input type="checkbox" name="saturday">
        <label for="saturday">Saturday</label>
        </div>

    </fieldset>

    <label for="preferred_time">Preferred Time</label>
    <fieldset>
        <div>
        <input type="checkbox" name="early">
        <label for="early">Early(11AM-1PM)</label>
        </div>

        <div>
        <input type="checkbox" name="afternoon">
        <label for="afternoon">Afternoon(2PM-4PM)</label>
        </div>

        <div>
        <input type="checkbox" name="late">
        <label for="late">Late(5PM-7PM)</label>
        </div>


    </fieldset>
    <label for="comment">Additional Comments or Concerns</label>
    <textarea id="comment" name="comment"  style="height:200px"></textarea>

    <label for="returning_client">Have you been tattooed by me before?</label>
    <fieldset>
        <label for="yes">Yes</label>
        <input type="radio" id="yes" name="returning_client" >
        <br>
        <label for="no">No</label>
        <input type="radio" id="no" name="returning_client" >
    </fieldset>


    <div style="margin-bottom: 16px; background-color: rgb(121, 201, 247, .4); padding: 20px; border: 1px solid #ccc;border-radius: 4px; box-sizing: border-box;">
        Thank you so much for your interest in my work! Please note that at this is only a request form and does not guarantee a set appointment, this just helps me get the booking process rolling. All appointments will require a deposit to book after I have reached out to you regarding your submitted request. Please be sure to check your SPAM email folder first if you do not hear from me within 2-3 days of the initial form submission as emails do occasionally end up in the wrong place.    </div>
    
        <label for="confirm">By submitting this form you agree to the following</label>
    <fieldset>
        <div>
        <input type="checkbox" name="contact">
        <label for="contact">I have included all of the best ways to contact me.</label>
        </div>

        <div>
        <input type="checkbox" name="info">
        <label for="info">I have included as much information about the tattoo design/idea as I could.</label>
        </div>

        <div>
        <input type="checkbox" name="not_confirmed">
        <label for="not_confirmed">I understand that this is NOT a confirmed and booked appointment. (See above note)</label>
        </div>


    </fieldset>-->
        <input type="submit" value="Submit">
    </form>
    </div> 

  </div> 
  <div class="mobileWrapper"></div>
</template>

<style scoped>
@media only screen and (max-width: 550px) {
  .mobileWrapper {
    width: 100%;
    margin: auto;
    margin-top: 30px;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid rgba(216 112, 72, 0.5);
  }
  /* .wrapper {
    display: none !important;
  } */
}
input[type=text], select, textarea, fieldset {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}
input[type=email], select, textarea, fieldset {
    background-color: white;
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
}

input[type=file], select, textarea, fieldset {
    background-color: white;
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
}
/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.wrapper {
  width: 80%;
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 3px solid rgba(216 112, 72, 0.5);
}
.mobileWrapper {
  display: none;
}
</style>
