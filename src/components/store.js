import { observable} from "mobx";

class MainStore {
    @observable isLogin = false

    @observable user = {}

    @observable events = []

    @observable chosenDay = 0

    @observable chosenActivity = {}

    @observable messages = []

    @observable chatId = ""

    @observable chat = []

    @observable chatNote = ""

    @observable chatLevel = 3

    @observable sender = ""
}

const store = new MainStore()

export default store;