package by.mamont.entity;

import javax.persistence.*;


@Entity(name = "track")
@Table(name = "track")
public class Track
{
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "track_id")
  private int id;
  @Column(name = "artist")
  private String artist;
  @Column(name = "title")
  private String title;
  @Column(name = "storage_id")
  private String storageId;


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


  public String getStorageId()
  {
    return storageId;
  }


  public void setStorageId(String storageId)
  {
    this.storageId = storageId;
  }
}
