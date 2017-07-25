package by.mamont.entity;

/**
 * User: salexetovich
 * Date: 14.06.2017
 */
public class Track
{
  private int id;
  private String artist;
  private String title;


  public String getArtist()
  {
    return artist;
  }


  public void setArtist(String artist)
  {
    this.artist = artist;
  }


  public String getTitle()
  {
    return title;
  }


  public void setTitle(String title)
  {
    this.title = title;
  }


  public int getId()
  {
    return id;
  }


  public void setId(int id)
  {
    this.id = id;
  }
}
