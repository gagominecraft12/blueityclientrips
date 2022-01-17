function request() {
    import { main } from '/';
    var methods = {
        methods: {
            "get": new Request(),
            "post": new Request()
        },
    }
    methods.methods.get("/"),
    methods.methods.post("/goapi/saveWaveform");
}