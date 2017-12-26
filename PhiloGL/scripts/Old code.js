

/**
*HashObject - contains a hash array for use later.
*/
function HashObject(obj){
	this.length = 0;
	this.items = {};
	
	for (var p in obj) {//if a dictionary/hash table is specified in the constructor, translate.
        if (obj.hasOwnProperty(p)) {
            this.items[p] = obj[p];
            this.length++;
        }
    }
	
    this.addItem = function(key, value)
    {
        var previous = undefined;
        if (this.hasItem(key)) {
            previous = this.items[key];
        }
        else {
            this.length++;
        }
        this.items[key] = value;
        return previous;
    }

    this.getItem = function(key) {
        return this.hasItem(key) ? this.items[key] : undefined;
    }

    this.hasItem = function(key)
    {
        return this.items.hasOwnProperty(key);
    }
   
    this.removeItem = function(key)
    {
        if (this.hasItem(key)) {
            previous = this.items[key];
            this.length--;
            delete this.items[key];
            return previous;
        }
        else {
            return undefined;
        }
    }

    this.keys = function()
    {
        var objKeys = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                objKeys.push(k);
            }
        }
        return objKeys;
    }

    this.values = function()
    {
        var objValues = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                objValues.push(this.items[k]);
            }
        }
        return objValues;
    }

    this.each = function(fn) {
        for (var k in this.items) {
            if (this.hasItem(k)) {
                fn(k, this.items[k]);
            }
        }
    }

    this.clear = function()
    {
        this.items = {}
        this.length = 0;
    }	
}


//2d Perlin Noise grid of width w
//-Create main grid, values from 0 to 1.
//-Create supergrid, with width sw a factor of n.
//-Each supergrid contains a vector (-1,1) or (1,0.5)
//resolution: w/sw
//e.g. 64/4=16


//generateHash(20);

//let gridWidth = 64;
//let resolution = 4;

//let mainGrid = new HashObject({});
//let superGrid = new HashObject({});
