package by.mamont;
import org.junit.Test;
import org.junit.Assert;

public class MainTest
{
  @Test
  public void testGetMessage()
  {
    Assert.assertEquals("Augen auf, ich komme!", Main.getMessage());
  }
}