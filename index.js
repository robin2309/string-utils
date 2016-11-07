export default {

    isUndefined(s1) {
        return s1 === undefined;
    },

    isNull(s1) {
        return s1 === null;
    },

    isEmpty(s1) {
        return s1 === "";
    },

    isBlank(s1) {
        return this.isUndefined(s1) || this.isNull(s1) || this.isEmpty(s1);
    }
    
}
