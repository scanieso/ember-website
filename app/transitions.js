export default function() {
  this.transition(
    this.childOf('.page-name'),
    this.use('fade', { duration: 200 })
    );
}
