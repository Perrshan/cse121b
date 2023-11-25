/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: 'Xave Perry',
    photo: 'images/pictureofmyself.JPG',
    favoriteFoods: ['potatoes', 'taco salad', 'anything my wife makes', 'thanksgiving dinner'],
    hobbies: ['basketball', 'pickleball', 'croquet', 'video games', 'YouTube'],
    placesLived: [],
};  

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Idaho Falls, Idaho',
        length: '12 years'
    },

    {
        place: 'Austin, Texas',
        length: '2 years'
    },
    {
        place: 'Rexburg, Idaho',
        length: '1 year'
    }
)

/* DOM Manipulation - Output */ 

/* Name */
document.querySelector('#name').textContent = myProfile.name;  

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach((places) => {
    let dt = document.createElement('dt');
    dt.textContent = places.place;
    let dd = document.createElement('dd');
    dd.textContent = places.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  }); 

