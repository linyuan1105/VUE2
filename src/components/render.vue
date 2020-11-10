<script>
export default {
  functional: true,
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    console.log(h,context,this)
    let title = context.props.title
    return[
      <span>{title}</span>
    ]
  }
}
</script>
