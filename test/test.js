import StringUtils  from "../index.js";
import assert       from "assert";

describe('isNull method', () => {
    it('return true for null string', () => {
        let param = null;
        assert.equal(StringUtils.isNull(param), true);
    });
    it('returns false for undefined string', () => {
        let param;
        assert.equal(StringUtils.isNull(param), false);
    });
    it('returns false for initialized string', () => {
        let param = "value";
        assert.equal(StringUtils.isNull(param), false);
    });
    it('returns false for empty string', () => {
        let param = "";
        assert.equal(StringUtils.isNull(param), false);
    });
});

describe('isUndefined method', () => {
    it('returns true for undefined string', () => {
        let param;
        assert.equal(StringUtils.isUndefined(param), true);
    });
    it('returns false for null string', () => {
        let param = null;
        assert.equal(StringUtils.isUndefined(param), false);
    });
    it('returns false for initialized string', () => {
        let param = "value";
        assert.equal(StringUtils.isUndefined(param), false);
    });
    it('returns false for empty string', () => {
        let param = "";
        assert.equal(StringUtils.isUndefined(param), false);
    });
});
