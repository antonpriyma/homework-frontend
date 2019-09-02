'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
		assert.strictEqual(rle('MEEEEM'),'ME4M');
	});
});

QUnit.module('Тестируем функцию rle на числах', function () {
	QUnit.test('rle на числах работает правильно', function (assert) {
		assert.strictEqual(rle('13'), '13');
	});
});
