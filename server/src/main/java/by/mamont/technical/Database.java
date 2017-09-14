package by.mamont.technical;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;


public class Database
{
  private static SessionFactory sessionFactory;


  public Database()
  {
    initialize();
  }


  private void initialize()
  {
    sessionFactory = new Configuration().configure().buildSessionFactory();
  }


  public static Session getSession()
  {
    return sessionFactory.openSession();
  }


  void shutdown()
  {
    sessionFactory.close();
  }
}
