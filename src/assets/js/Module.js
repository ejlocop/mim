let Module = {
	data () {
		return {
			modules: []
		}
	},

	mounted () {
		let modules = [
			{
				key: 1,
				title: "ELECTRICITY and MAGNETISM",
				lessons: [],
			},
			{
				key: 2,
				title: "ELECTROMAGNETIC SPECTRUM",
				lessons: [],
			},
		];
		this.modules = modules;
		console.log(this.modules)
	}
}

export default Module