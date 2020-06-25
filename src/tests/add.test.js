const add=(a,b)=>a+b;
const greetings=(name)=>`hello ${name}`;

test('should add two number',()=>{
	const result=add(5,6);
	expect(result).toBe(11);
});

test('greetings with variable name',()=>{
	const result=greetings('anni');
	expect(result).toBe('hello anni');
});