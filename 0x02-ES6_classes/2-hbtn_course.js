class HolbertonCourse {
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this.students = students;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        // Convert non-string values to string
        this._name = typeof value === 'string' ? value : String(value);
    }

    get length() {
        return this._length;
    }

    set length(value) {
        // Convert non-number values to number
        this._length = typeof value === 'number' ? value : Number(value);
    }

    get students() {
        return this._students;
    }

    set students(value) {
        // Ensure value is an array
        this._students = Array.isArray(value) ? value : [value];
    }
}
export default HolbertonCourse;
