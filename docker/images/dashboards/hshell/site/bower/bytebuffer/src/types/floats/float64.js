//? if (FLOAT64) {
// types/floats/float64

/**
 * Writes a 64bit float.
 * @param {number} value Value to write
 * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
 * @returns {!ByteBuffer} this
 * @expose
 */
ByteBuffer.prototype.writeFloat64 = function(value, offset) {
    //? RELATIVE();
    if (!this.noAssert) {
        if (typeof value !== 'number')
            throw new TypeError("Illegal value: "+value+" (not a number)");
        //? ASSERT_OFFSET();
    }
    //? ENSURE_CAPACITY(8);
    //? if (NODE) {
    this.littleEndian
        ? this.buffer.writeDoubleLE(value, offset, true)
        : this.buffer.writeDoubleBE(value, offset, true);
    //? } else
    this.view.setFloat64(offset, value, this.littleEndian);
    //? RELATIVE(8);
    return this;
};
//? if (ALIASES) {

/**
 * Writes a 64bit float. This is an alias of {@link ByteBuffer#writeFloat64}.
 * @function
 * @param {number} value Value to write
 * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
 * @returns {!ByteBuffer} this
 * @expose
 */
ByteBuffer.prototype.writeDouble = ByteBuffer.prototype.writeFloat64;
//? }

/**
 * Reads a 64bit float.
 * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
 * @returns {number}
 * @expose
 */
ByteBuffer.prototype.readFloat64 = function(offset) {
    //? RELATIVE();
    if (!this.noAssert) {
        //? ASSERT_OFFSET(8);
    }
    //? if (NODE) {
    var value = this.littleEndian
        ? this.buffer.readDoubleLE(offset, true)
        : this.buffer.readDoubleBE(offset, true);
    //? } else
    var value = this.view.getFloat64(offset, this.littleEndian);
    //? RELATIVE(8);
    return value;
};
//? if (ALIASES) {

/**
 * Reads a 64bit float. This is an alias of {@link ByteBuffer#readFloat64}.
 * @function
 * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
 * @returns {number}
 * @expose
 */
ByteBuffer.prototype.readDouble = ByteBuffer.prototype.readFloat64;
//? }

//? }