document.addEventListener('DOMContentLoaded', ()=>{
  const people = document.querySelector('#people');
  function getContacts() {
    $.ajax({
      url: 'http://localhost:8000/contacts/person/',
      method: 'GET',
      data: {},
      dataType: 'json'
    }).done((responseData)=>{
      for (var i = 0; i < responseData.objects.length; i++) {
        console.log(responseData);
        let list = document.createElement('li');
        let name = document.createElement('p');
        let number = document.createElement('p');
        let address = document.createElement('p');
        name.innerText = `Name: ${responseData.objects[i].name}.`;
        number.innerText = `Name: ${responseData.objects[i].number}.`;
        address.innerText = `Name: ${responseData.objects[i].address}.`;
        list.append(name);
        list.append(number);
        list.append(address);
        people.append(list);

      }
    })
  }
  getContacts();

  const newPerson = document.querySelector('.update');
  newPerson.addEventListener('click', ()=>{
    // e.preventDefault
    let nameForm = document.querySelector('.name');
    let numberForm = document.querySelector('.number');
    let addressForm = document.querySelector('.address');
    console.log(nameForm.value, numberForm.value, addressForm.value);
    let entry = {
      name: nameForm.value,
      number: numberForm.value,
      address: addressForm.value
    }
    $.ajax({
      url: 'http://localhost:8000/contacts/person/',
      method: 'POST',
      data: JSON.stringify(entry)
    }).done((responseData)=>{
    // $.postJSON = function(url, data, callback) {
    //   return jQuery.ajax({
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   'type': 'POST',
    //   'url': url,
    //   'data': JSON.stringify(entry),
    //   'dataType': 'json',
    //   'success': callback
    //   });
    console.log(responseData);
      let nameSubmission = document.createElement('p');
      let numberSubmission = document.createElement('p');
      let addressSubmission = document.createElement('p');
      nameSubmission.innerText = responseData.name;
      numberSubmission.innerText = responseData.number;
      addressSubmission.innerText = responseData.address;
      people.append(nameSubmission, numberSubmission, addressSubmission);
      console.log('success');
      getContacts();
    })
  })
});
