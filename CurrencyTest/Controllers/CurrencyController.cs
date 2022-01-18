using CurrencyTest.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;

namespace CurrencyTest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CurrencyController : ControllerBase
    {
        public IConfiguration _configuration { get; set; }

        public CurrencyController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<ResponseBase<CubeModel>> Get()
        {
            var response = new ResponseBase<CubeModel>();
            response.Success = true;

            try
            {
                var client = new HttpClient();
                var dataUrl = _configuration["ClientSettings:Url"];
                var result = await client.GetAsync(dataUrl);

                if (result.StatusCode != System.Net.HttpStatusCode.OK)
                {
                    response.Success = false;
                    response.Message = "Client connect problem";
                    return response;
                }

                var xmlContent = await result.Content.ReadAsStringAsync();
                var xmlDocument = new XmlDocument();
                var doc = XDocument.Parse(xmlContent);
                var rootDoc = XDocument.Parse(doc.Root.LastNode.ToString());
                var lastDoc = XDocument.Parse(rootDoc.Root.LastNode.ToString());
                xmlDocument.LoadXml(lastDoc.Root.ToString());

                var xmlNodeJson = JsonConvert.SerializeXmlNode(xmlDocument, Newtonsoft.Json.Formatting.None);
                xmlNodeJson = xmlNodeJson.Replace("@", "");
                var responseWrapper = JsonConvert.DeserializeObject<CubeWrapperModel>(xmlNodeJson);

                response.Result = responseWrapper.Cube;
                response.TotalCount = responseWrapper.Cube.Cubes.Count();

            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            return response;
        }
    }
}
