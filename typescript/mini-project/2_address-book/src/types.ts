enum PhoneType {
    home = 'home',
    Office = 'office',
    Studio = 'studio',
}
  
interface PhoneNumberDictionary {
    [phone: string]: {
        num: number;
    };
}
  
interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}

export { PhoneType, PhoneNumberDictionary, Contact };

