export var mixin={
  data() {
    return {
      timer:null
    }
  },
  methods:{
    debounce(fun, delay) {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        console.log("---");
        fun.call(this);
      }, delay);
    },
  }
}