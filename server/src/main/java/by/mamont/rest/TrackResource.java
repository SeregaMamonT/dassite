package by.mamont.rest;

import by.mamont.entity.Track;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.LinkedList;
import java.util.List;


@Path("tracks")
public class TrackResource
{
  private List<Track> tracks = new LinkedList<>();


  public TrackResource()
  {
    tracks.add(createTrack("Oomph!", "Augen auf!"));
    tracks.add(createTrack("Oomph!", "Labyrinth"));
    tracks.add(createTrack("Rammstein", "Du Riechtst So Gut"));
  }


  @GET
  @Path("all")
  @Produces(MediaType.APPLICATION_JSON)
  public List<Track> getTracks()
  {
    return tracks;
  }


  private Track createTrack(String singer, String title)
  {
    Track track = new Track();
    track.setArtist(singer);
    track.setTitle(title);
    return track;
  }
}
