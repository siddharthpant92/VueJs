export const stringMixin = {
	data()
    {
        return{
            textMixin: "Hello World Again!"
        }
    },
    computed:
    {
        reverseStringMixin()
        {
            return this.textMixin.split("").reverse().join("");
        },
        lengthStringMixin()
        {
            return this.textMixin.length;
        }
    }
}