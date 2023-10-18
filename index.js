import express from 'express';
import routes from './routes/routes.js';
import path from 'path';
const app = express();
const port = process.env.PORT || 8080; // Use uppercase PORT
// Setup static files
app.use(express.static(path.join(process.cwd(), 'public'))); // Use __dirname instead of process.ewd()
// EJS setup
app.set('view engine', 'ejs');
app.set('views', './views');
// Create routes
app.use('/', routes);
app.get('/index', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
  });
  app.get('/portfolio', (req, res) => {
    res.render('portfolio');
  });
  app.get('/services', (req, res) => {
    res.render('services');
  });
  app.get('/contact', (req, res) => {
    res.render('contact');
  });
 
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
