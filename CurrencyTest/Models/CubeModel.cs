using Newtonsoft.Json;
using System.Collections.Generic;

namespace CurrencyTest.Models
{
    public class CubeWrapperModel
    {
        public CubeModel Cube { get; set; }
    }

    public class CubeDetailModel
    {
        public string Currency { get; set; }
        public string Rate { get; set; }
    }

    public class CubeModel
    {
        [JsonProperty("Cube")]
        public List<CubeDetailModel> Cubes { get; set; }

        public string Time { get; set; }

        public string Xmlns { get; set; }
    }
}
