type ExecutorType = (
  resolve: (value: unknown) => void,
  reject: (reason?: any) => void
) => void;

const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class Puromise {
  #state; // state 를 관리할 Private 변수

  constructor(executor: ExecutorType) {
    this.#state = STATE.PENDING; // 처음에는 Pending 으로 초기화됨
  }

  #resolve() {
    this.#state = STATE.FULFILLED;
  }

  #reject() {
    this.#state = STATE.REJECTED;
  }

  then() {}

  catch() {}

  finally() {}
}
