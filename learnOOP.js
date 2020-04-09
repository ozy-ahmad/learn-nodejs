class Manusia {
    constructor (obj = {}) {
        this.name = name;
        this.age = age || 1;
    }
    getNameAndAge() {
        return `${this.name} and ${history.age} years`
    }
}

const budi = new Manusia ({
    name: "budi baikhati",
    age: 18,
})
console.log(budi);

class Pekerjaan extends Manusia {
    constructor (obj = {} ){
        super(obj);
        this.pekerjaan = obj.pekerjaan || '';
        this.bekerjaSejak = obj.bekerjaSejak || '';
    }
    render(){
        let kerja = "masih bisa kerja"
        if (this.age >=50){
            kerja = 'tidak boleh kerja keras';
        }
        return 
            `<h1>${this.name}</h1>
            <h2>${kera}</h2>
            `;
            
    }
}
class Rumah extends Perkerjaan {
        consturctor(obj = {}) { 
    super(obj);
    this.alamat = obj.alamat || '';
        }
    }


const PakDe = new Pekerjaan({
    name: "kumis panjang", 
    age: 80, 
    pekerjaan:"tukang pijat"
});
const BuDe = new Pekerjaan ({
    name: "Jeng Juminten",
    age:45,
    pekerjaan:"Tukang masak",
    bekerjaSejak: "1999"

});
const Rumah0A1 = new Rumah ({
    name: "Bill",
    alamat: "Batam center"
    
})
console.log(PakDe);
