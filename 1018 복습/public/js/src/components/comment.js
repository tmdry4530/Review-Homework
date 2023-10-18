import Component from "../../core/component.js";
import CommentForm from "../contents/comment/form.js";
import CommentItem from "../contents/comment/item.js";

class Comment extends Component {
  setup() {
    this.state = {
      comments: [
        {
          id: 1,
          userid: "chamdom44",
          content: "hello world",
          date: "2023-10-17",
        },
        {
          id: 2,
          userid: "chamdom44",
          content: "hello world",
          date: "2023-10-17",
        },
        {
          id: 3,
          userid: "chamdom44",
          content: "hello world",
          date: "2023-10-17",
        },
      ],
    };
  }
  template() {
    return `
      <ul>
        <li class='comment-form'></li>
        <li class='comment-item'></li>
      </ul>
    `;
  }
  insertItem(content) {
    const { comments } = this.state;
    const id = comments.length !== 0 ? comments[comments.length - 1].id + 1 : 0;
    comments.push({
      id,
      userid: "chamdom",
      content,
      date: new Date().toISOString.slice(0, 10),
    });
    const newState = [...comments];
    this.setState({ ...this.state, ...newState });
  }
  updateItem(id, content) {
    const { comments } = this.state;
    const newState = [...comments];
    const index = newState.findIndex((v) => v.id === parseInt(id));
    newState[index].content = content;
    this.setState({ ...this.statem, comments: [...newState] });
  }
  deleteItem(id) {
    const { comments } = this.state;
    const newState = comments.filter((v) => v.id !== id);
    this.setState({ ...this.state, comments: [...newState] });
  }
  mounted() {
    const { comments } = this.state;
    const formTarget = document.querySelector(".comment-form");
    const insertItem = this.insertItem.bind(this);
    new CommentForm(formTarget, { length: comments.length, insertItem });

    const itemTarget = document.querySelector(".comment-item");
    const updateItem = this.updateItem.bind(this);
    const deleteItem = this.deleteItem.bind(this);
    new CommentItem(itemTarget, { comments, deleteItem, updateItem });
  }
  setEvent() {}
}
export default Comment;
