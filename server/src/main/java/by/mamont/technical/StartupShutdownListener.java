package by.mamont.technical;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;


public class StartupShutdownListener implements ServletContextListener
{
  private Database database;


  @Override
  public void contextInitialized(ServletContextEvent sce)
  {
    System.out.println("Startup started");
    database = new Database();
    System.out.println("Startup finished");
  }


  @Override
  public void contextDestroyed(ServletContextEvent sce)
  {
    System.out.println("Shutdown started");
    database.shutdown();
    System.out.println("Shutdown finished");
  }
}
