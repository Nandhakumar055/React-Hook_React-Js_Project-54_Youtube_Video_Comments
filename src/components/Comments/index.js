import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentsList] = useState([])
  const [isError, setError] = useState(false)

  const onChangeName = event => setName(event.target.value)

  const onChangeCommentText = event => setCommentText(event.target.value)

  const onAddComment = event => {
    event.preventDefault()

    if (name !== '' && commentText !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        commentText,
      }
      setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
      setName('')
      setCommentText('')
      setError(false)
    } else {
      setError(true)
    }
  }

  const alert = isError ? 'red' : '#cbd5e1'

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
          alert={alert}
        />
        <CommentTextInput
          placeholder="Your comment"
          value={commentText}
          onChange={onChangeCommentText}
          rows="6"
          alert={alert}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem key={eachComment.id} commentDetails={eachComment} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
