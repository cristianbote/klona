export default function klona(x) {
	var k, tmp, str=Object.prototype.toString.call(x)[8];

	if (str === 'O') {
		tmp = {};
		for (k in x) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === 'A') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === 'D') {
		return new Date(+x);
	}

	if (str === 'R') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	return x;
}
