

const ContactMe = () => {
    return (
        <form action="https://formspree.io/f/mknldkbb" method="POST">
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message" />
      </label>
      <button type="submit">Submit</button>
    </form>
    );
};

export default ContactMe;