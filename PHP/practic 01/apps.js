
// JavaScript Object 


const mobileModel = {
    brand: 'Samsung',
    model: 's24 Ultra',
    camera: '14',
    processor: 'Sanpdragon Gen 3',
    hasZoomCamera: true,
    'selfie camera MP': 12,
    brandModel: function () {
        return `Mobile Brand is ${this.brand} and model is ${this.model}`;
    },
    battray: {
        mah: 5000,
    },
}

function Person(first, last) {
    (this.firstName = first), (this.lastName = last);
  }

const Person1 = new Person('Ruhul', 'Amin');
const Person2 = new Person('Rana', 'Babu');
Person1.age = 20;

Person2.greet = function () {
    return 'Hello';
  };
 
console.log(Person1);
console.log(Person2.greet());
