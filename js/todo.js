const todo = {
  items: [], // 작업 목록
  // 작업 등록
  add(title, description, deadline) {
    const seq = Date.now();
    this.items.push({ seq, title, description, deadline, done: false });

    this.render(); // 화면 갱신
  },
  // 작업 삭제
  remove(seq) {
    // seq로 작업 목록 순서 번호(index) 조회
    const index = this.items.findIndex((item) => item.seq === seq);

    // splice로 해당 순서 번호 항목 제거
    this.items.splice(index, 1);

    // 화면 갱신
    this.render();
  },
  // 작업 목록 출력, 갱신
  render() {},
};

window.addEventListener("DOMContentLoaded", function () {
  // 양식 태그의 기본 동작 차단
  frmTodo.addEventListener("submit", function (e) {
    e.preventDefault();
  });
});
