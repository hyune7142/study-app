const { Router } = require('express');

const contacts = [{ id: 1, name: '홍길동', phone: '01012341234' }];
const router = Router();

const contactsRouter = () => {
  router.get('/', (req, res) => {
    res.json(contacts);
  });

  router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(contacts.find(d => d.id === +id));
  });

  router.post('/', (req, res) => {
    const { body } = req;
    if (!body.name) return res.status(400).send('No Name');
    if (!body.phone) return res.status(400).send('No Phone Number');

    const id = (contacts[contacts.length - 1]?.id ?? 0) + 1;
    const newContact = { id, name: body.name, phone: body.phone };
    contacts.push(newContact);

    res.json(newContact);
  });

  router.put('/', (req, res) => {
    const { body } = req;
    if (!body.id) return res.status(400).send('No ID');

    const contact = contacts.find(d => d.id === body.id);
    if (!contact) return res.status(500).send('Cannot find contact');
    contact.name = body.name || contact.name;
    contact.phone = body.phone || contact.phone;

    res.json(contact);
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const idx = contacts.findIndex(d => d.id === id);
    const [contact] = contacts.splice(idx, 1);
    res.json(contact);
  });

  return router;
};

module.exports = contactsRouter;