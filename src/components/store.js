import { observable} from "mobx";

class MainStore {
    @observable isLogin = false

    @observable user = {}

    @observable events = []

    @observable chosenDay = 0
}

const store = new MainStore()

export default store;