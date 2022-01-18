using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyTest.Models
{
    public class ResponseBase<TModel>
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public TModel Result { get; set; }
        public int TotalCount { get; set; }
    }
}
