import { Content } from './content'

export interface NotificationProps {
  content: Content
  category: string
  readAt?: Date | null
  createdAt: Date
  recipientId: string
}

export class Notification {
  constructor(private props: NotificationProps) {}

  public set content(content: Content) {
    this.props.content = content
  }

  public get content(): Content {
    return this.props.content
  }

  public set category(category: string) {
    if (category.length < 5) {
      throw new Error('generic')
    }

    this.props.category = category
  }

  public get category() {
    return this.props.category
  }

  public set recipientId(recipientId: string) {
    if (recipientId.length < 5) {
      throw new Error('generic')
    }

    this.props.recipientId = recipientId
  }

  public get recipientId() {
    return this.props.recipientId
  }

  public set readAt(readAt: Date) {
    this.props.readAt = readAt
  }

  public get readAt(): Date {
    return this.props.readAt || new Date()
  }

  public get createdAt() {
    return this.props.createdAt
  }
}
