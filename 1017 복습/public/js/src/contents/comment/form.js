import Component from "../../../core/component.js";

class CommentForm extends Component {
  setup() {}
  template() {
    return `
  <h4>
  댓글쓰기
  <span>(${this.props.length})</span>
</h4>
<form id="commentFrm" class="commentFrm">
  <span class="ps_box">
    <input type="text" placeholder="댓글 써" />
  </span>
  <button type="submit" class="btn">등록</button>
</form>
`;
  }
  mounted() {}
  handleSubmit() {
    e.preventDefault();
    console.log("submit work");
    this.props.insertItem();
  }
  setEvent() {
    const handleSubmit = this.handleSubmit.bind(this);
    this.addEvent("submit", "#commentFrm", handleSubmit);
  }
}

export default CommentForm;
