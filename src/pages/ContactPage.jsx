
import $ from 'jquery'

export default function ContactPage() {
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  $(document).ready(function() {  
    $(".contactForm").submit(function(e){
      e.preventDefault();
      window.alert("Successfully submitted contact form! Please wait for a reply, I'll get to you shortly :)")
      window.location.reload()
  });
  }
  )
  

  return (
    <div className="container pt-4">
      <h4>Contact Me</h4>
      <p>
        I'm always available to contact! Just fill out the form below, and I'll be sure to get back to you!
      </p>
      <form class="contactForm">
      <div class="form-group">
      <label for="nameForm">Your Name</label>
    <textarea required="true" class="form-control" id="nameForm" rows="1"></textarea>
    <label for="emailForm">Email address</label>
    <input required="true" type="email" class="form-control" id="emailForm" aria-describedby="emailHelp" placeholder="Enter email" />
    <label for="messageForm">Message</label>
    <textarea required="true" class="form-control" id="messageForm" rows="3"></textarea>
    <p class="statusText"></p>
    <button type="submit" class="btn btn-primary my-2" onClick="window.alert('Submitted contact! Please wait for a reply, I'll get to you shortly :)')">Submit</button>
    <br/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your response with anyone else.</small>
  </div>
      </form>
    </div>
  );
}
