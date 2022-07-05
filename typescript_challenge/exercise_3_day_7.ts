// 1 - Use abstract classes and generics.
    // 1 - my answer
interface LocalStorageAPI<T> {
    [key: string]: T
}

abstract class LocalStorageClass<T> {
    constructor(
        public localStorage: LocalStorageAPI<T> = {}
    ) {}
    public setItem(key: string, value: T): void {
        this.localStorage[key] = value;
    }
    public getItem(key: string) {
        return this.localStorage[key];
    }
    public clearItem(key: string) {
        delete this.localStorage[key];
    }
    public clear() {
        this.localStorage = {};
    }
}

class LocalStorage2<V> extends LocalStorageClass<V> {
}
const localStorage2 = new LocalStorage2();

localStorage2.setItem('level', 3);
localStorage2.getItem('level');
localStorage2.clearItem('level');
localStorage2.clear();


// 2 - Use overloading.
interface GeolocationAPI {
    
}
// geolocation.getCurretPosition(successFn);
// geolocation.getCurrentPosition(successFn, errorFn);
// geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
// geolocation.watchPosition(success);
// geolocation.watchPosition(success, error);
// geolocation.watchPosition(success, error, options);
// geolocation.clearWatch(id);
