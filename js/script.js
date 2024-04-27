window.onscroll = function() {
    scrollFunction();
  };
  
function scrollFunction() {
  var navbar = document.getElementById("bgBlue");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.backgroundColor = "rgba(53, 85, 146, 1.00)";
  } else {
    navbar.style.backgroundColor = "rgba(53, 85, 146, 0)";
  }
  navbar.style.transition = "background-color 0.5s ease";
}

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(btn => {
        btn.classList.remove('linked');
      });
      this.classList.add('linked');
    });
  });
});

function changeContent(classType) {
  const title = document.querySelector('.class-title');
  const info = document.querySelector('.class-info');
  const datetitle = document.querySelector('.class-date-title');
  const date = document.querySelector('.class-date');
  const image = document.querySelector('.class-image');

  switch(classType) {
    case 'yoga':
      title.textContent = "Why are your Yoga?";
      info.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex unde officiis, animi repellat est ea laboriosam suscipit exercitationem velit saepe nostrum ullam aliquid, magnam doloremque laborum iusto optio, corrupti assumenda ducimus error odio consectetur? Sapiente, aspernatur? Odit in aperiam ab!";
      datetitle.textContent = "When comes Yoga Your Time.";
      date.innerHTML = "Saturday-Sunday: 9:00am - 10:00am <br>Monday-Tuesday: 10:00am - 12:00am <br>Wednesday-Friday: 3:00pm - 6:00am";
      image.src = "img/yoga.jpg";
      break;
    case 'group':
      title.textContent = "Why are your Group?";
      info.textContent = "Group info Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem distinctio dolorum dolores sapiente error et quo debitis ullam consequatur nostrum magni saepe, vero quos minima.";
      datetitle.textContent = "When comes Group Your Time.";
      date.innerHTML = "Saturday-Sunday: 9:00am - 10:00am <br>Thursday-Saturday: 8:00am - 10:00am <br>Sunday-Monday: 5:00pm - 8:00am";
      image.src = "img/group.webp";
      break;
    case 'solo':
      title.textContent = "Why are your Solo?";
      info.textContent = "Solo info Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi modi, temporibus distinctio debitis iure ut odit commodi fugiat ducimus perferendis asperiores consectetur repudiandae omnis maiores earum atque rerum.";
      datetitle.textContent = "When comes Solo Your Time.";
      date.innerHTML = "Monday-Saturday: 10:00am - 1:00pm <br>Monday-Tuesday: 12:00am - 3:00pm <br>Wednesday-Sunday: 5:00pm - 8:00am";
      image.src = "img/solo.jpg";
      break;
    case 'stretching':
      title.textContent = "Why are your Stretching?";
      info.textContent = "Stretching info Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus, illum quasi quibusdam veritatis asperiores sapiente iure voluptatum perferendis impedit laboriosam eveniet dicta voluptas!";
      datetitle.textContent = "When comes Stretching Your Time.";
      date.innerHTML = "Monday-Saturday: 10:00am - 1:00pm <br>Wednesday-Saturday: 10:00am - 4:00pm <br>Friday-Sunday: 10:00pm - 12:00pm";
      image.src = "img/stret.webp";
      break;
    default:
      break;
  }
}

document.getElementById('height').addEventListener('input', calculateBMI);
document.getElementById('weight').addEventListener('input', calculateBMI);

function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  if (height > 0 && weight > 0) {
    let bmi = (weight / ((height / 100) ** 2));
    document.getElementById('bmi').textContent = bmi.toFixed(2);
    const triangle = document.querySelector('.triangle');
    if(bmi < 18.5){
      const new1 = bmi + 2.5;
      triangle.style.left = `${new1}%`;
    } else if(bmi < 25) {
      const new2 = 22 + ((bmi - 18.5) * 2.3);
      triangle.style.left = `${new2}%`;
    } else if(bmi < 40) {
      const new3 = 38 + ((bmi - 25) * 3.2);
      triangle.style.left = `${new3}%`;
    } else {
      const new4 = 86.5;
      triangle.style.left = `${new4}%`;
    }

  } else {
    document.getElementById('bmi').textContent = '';
  }
}

