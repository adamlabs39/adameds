db = db.getSiblingDB('adameds_v3');
db.createUser({
  user: 'engineer_adam',
  pwd: 'resman56adam',
  roles: [
    {
      role: 'readWrite',
      db: 'adameds_v3'
    }
  ]
});

db.mycollection.insertOne({
  name: 'Initial Data',
  status: 'active',
  created_at: new Date()
});

db.mycollection.createIndex({ name: 1 });