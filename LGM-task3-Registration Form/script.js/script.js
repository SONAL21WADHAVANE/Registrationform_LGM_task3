vor form = document.querySelector("userforam");

const allUsersData = []

const resetform = function () { 

form.classList.remove("wes-validated") 

const name = document.getElementById('name');

name.value = " ";

const email = document.getElementById('email');

email.value =" ";

const website  =document.getElementById('website');

website.value =" ";

const image =document.getElementById('img');

image.value =" ";

cimet genderEl = document.querySelectorAll("input[name="gender"]");

For (const rb of genderEl) {
	rb.checked =false;
}

const skill =document.querySelectural1 ("Input[name="ski11"]");
	for (const rb of ski1E1) (

		rb.checked=false;
	}
};



const getdata=function () {

const name=document.getElementById('name').value; 

const email=document.getElementById('email').value;

const website =document.getElementById('website').value;

const Inage=document.getElementById('image').value;

Let gender;

Let skills=[];

const genderEl=document.querySelectorAll('input[name="gender"]');
 for (const rb of genderEl) {

    if(rb.checked) { 

		gender rb.value;

		break;
	}
};

const skillE1=document.querySelectorAll('input[name="skill"]');

for (const rb of ski1E1) (

    if(rb.checked) { 

         skills.push(rb.value);
     }
}

return(name, email, website, image, gender, skills };
};




form.oddEventListener("submit", function (event) { 
	event.preventDefault();

	if (form.checkValidity()) (

		const data = tData();

		allusersData.push(data);

		printsult(data);

		resetform();

	} else { 
		form.classList.add('was-validated');
	};

	removeSpan();
});




function removeSpan() {

var span = document.getElementById("span");

if(span){

span.remove();
}
};

function printResult(data) { 

const resultEl * document.getElementById('enrolled-students');

Let sectionHeading = null;

if (allusersData.length == 1){

sectionHeading=document.createElement("div");

const description=document.createment("p"); 

description. InnerHTML="Description"; 

description.classfiome="description";

const image=document.createElement('p');

image.innerHTML * "Image";
 
image.className = "Image";

sectionHeading.className="sectionwading" ;

sectionHeading.append(description, image);
};

const wrapper=document.createElement('div'};

wrapper.className = "wrapper";

wrapper.addEventListener('click', function (e) { 
	console.log(e.target.classname ); 
	if (e.target.classtName.includes('userDeleteBtn')){ 
		console.log('aaadfastfasdf');
		e.currentTarget.remove();
	}
});

const deleteBtn = document.createElement('button');
deleteBtn.innerHTML = "+";
deleteBtn.className = "userDeleteBtn";

const testInfoContainer=document.createElement('div');
 textInfoContainer.classtone="textInfoContainer";

const imageContainer=document.createElement('div'); 
imageContainer.classtiane "imageContainer";

const inagetyperlink=document.createtlent('a');
inagtyperlink href=data.image;
imageHyperlink.target="_blank";

Let name document.createElement('p'))

gender.className "infoText gender";
genderinnerHTML = data.gender;

Let email =document.createElement('p');
email.className="InfoText gender";
email.innerHTML=data.email;



Let website=document.createElement('a');
website.className "infoText website";

website.innerHTML=data.website;

website.href=data.website;

website.target="_blank";

Let skills=document.createElement('p';
skills.classNane="infoTest skills";

skills.innerHTML=data.skills.join(", ");

Let userInage= document.createllement('img'); 
userImage.className "userImage";
userImage.arc data. Image;

textInfoContainer.append(name, gender, email, website, skills);
imageHyperlink.appendChild(userImage); 
imageContainer.appendChild(imagetyperlink);

wrapper.append(textInfoContainer, imageContainer, deleteBtn);

if (sectionHeading == null){
 resultEl.append(wrapper);


} else {

resultEl.append(sectionheading, wrapper)
};
