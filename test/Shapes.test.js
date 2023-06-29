const Triangle = require('../lib/triangle');
const shape = new Triangle("blue", "orange", "purple", "yellow");
test('testing shape color', () => {
    expect(shape.color) .toBe('orange')
});

