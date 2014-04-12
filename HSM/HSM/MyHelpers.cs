using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Html;
using System.Text;
using System.Web.Helpers;
using System.Web.WebPages;
using System.Globalization;
using HsmBI;
namespace HSM
{
    public class MyHelpers
    {
    }

    public static class ExtenssionMethods
    {
        /// <summary>
        /// Split Options
        /// </summary>
        /// <param name="html"></param>
        /// <param name="currentSplit"></param>
        /// <param name="pageUrl"></param>
        /// <returns></returns>
        public static MvcHtmlString SplitOption(this HtmlHelper html, string currentSplit, Func<string, string> pageUrl)
        {
            StringBuilder result = new StringBuilder();

            defaultcon db = new defaultcon();
          
            var choir = (from c in db.ChoirSplits 
                        select c).ToList();

            foreach (var c in choir)
            {
                // Construct an <a> tag
                TagBuilder tag = new TagBuilder("a");
                tag.MergeAttribute("href", pageUrl(c.SplitId.ToString()));
                tag.InnerHtml = c.Description;
                tag.AddCssClass("btn btn-default btn-large");

                int nsplit = Convert.ToInt32(currentSplit);
                if (c.SplitId  == nsplit )
                {
                    tag.AddCssClass("btn btn-active btn-large");
                }
                result.AppendLine(tag.ToString());
            }

            return MvcHtmlString.Create(result.ToString());
        }

        public static MvcHtmlString PartOption(this HtmlHelper html, string currentPart, Func<string, string> pageUrl)
        {
            StringBuilder result = new StringBuilder();

            defaultcon db = new defaultcon();

            var choir = (from c in db.ChoirParts 
                         select c).ToList();

            foreach (var c in choir)
            {
                // Construct an <a> tag
                TagBuilder tag = new TagBuilder("a");
                tag.MergeAttribute("href", pageUrl(c.sn.ToString()));
                tag.InnerHtml = c.Part ;
                tag.AddCssClass("btn btn-default btn-large");

                //int npart = Convert.ToInt32(currentPart);
                //if (c.sn == npart)
                //{
                //    tag.AddCssClass("btn btn-active btn-large");
                //}
                result.AppendLine(tag.ToString());
            }

            return MvcHtmlString.Create(result.ToString());
        }
        /// <summary>
        /// AlphaNumberic Pager..
        /// </summary>
        /// <param name="html"></param>
        /// <param name="currentPage"></param>
        /// <param name="pageUrl"></param>
        /// <param name="showAllLink"></param>
        /// <returns></returns>
        public static MvcHtmlString AlphabeticalPager(this HtmlHelper html, string currentPage, Func<string, string> pageUrl, bool showAllLink = false)
        {
            StringBuilder result = new StringBuilder();


            char[] letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray();


            foreach (char letter in letters)
            {
                // Construct an <a> tag
                TagBuilder tag = new TagBuilder("a");
                tag.MergeAttribute("href", pageUrl(letter.ToString().ToLower()));
                tag.InnerHtml = letter.ToString();
                tag.AddCssClass("btn btn-default btn-large alphalist");


                if (letter.ToString().ToLower() == currentPage.ToLower())
                {
                    tag.AddCssClass("btn btn-active btn-large alphalist");
                }
                result.AppendLine(tag.ToString());
            }


            if (showAllLink)
            {
                // Construct an All tag
                TagBuilder tag = new TagBuilder("a");
                tag.MergeAttribute("href", pageUrl(string.Empty));
                tag.InnerHtml = "All";
                tag.AddCssClass("btn btn-success btn-large  alphalist");


                if (string.IsNullOrEmpty(currentPage))
                {
                    tag.AddCssClass("btn btn-active btn-large alphalist");


                }
                result.AppendLine(tag.ToString());
            }


            return MvcHtmlString.Create(result.ToString());
        }

        /// <summary>
        /// Pager - List
        /// </summary>
        /// <param name="webGrid"></param>
        /// <param name="mode"></param>
        /// <param name="firstText"></param>
        /// <param name="previousText"></param>
        /// <param name="nextText"></param>
        /// <param name="lastText"></param>
        /// <param name="numericLinksCount"></param>
        /// <param name="paginationStyle"></param>
        /// <returns></returns>
        public static HelperResult PagerList(
        this WebGrid webGrid,
        WebGridPagerModes mode = WebGridPagerModes.NextPrevious | WebGridPagerModes.Numeric,
        string firstText = null,
        string previousText = null,
        string nextText = null,
        string lastText = null,
        int numericLinksCount = 5,
        string paginationStyle = null)
        {
            return PagerList(webGrid, mode, firstText, previousText, nextText, lastText, numericLinksCount, paginationStyle, explicitlyCalled: true);
        }

        private static HelperResult PagerList(
            WebGrid webGrid,
            WebGridPagerModes mode,
            string firstText,
            string previousText,
            string nextText,
            string lastText,
            int numericLinksCount,
            string paginationStyle,
            bool explicitlyCalled)
        {

            int currentPage = webGrid.PageIndex;
            int totalPages = webGrid.PageCount;
            int lastPage = totalPages - 1;

            var ul = new TagBuilder("ul");
            ul.AddCssClass(paginationStyle);

            var li = new List<TagBuilder>();

            if (webGrid.TotalRowCount <= webGrid.PageCount)
            {
                return new HelperResult(writer =>
                {
                    writer.Write(string.Empty);
                });
            }

            if (ModeEnabled(mode, WebGridPagerModes.FirstLast))
            {
                if (String.IsNullOrEmpty(firstText))
                {
                    firstText = "First";
                }

                var part = new TagBuilder("li")
                {
                    InnerHtml = GridLink(webGrid, webGrid.GetPageUrl(0), firstText)
                };

                if (currentPage == 0)
                {
                    part.MergeAttribute("class", "disabled");
                }

                li.Add(part);

            }

            if (ModeEnabled(mode, WebGridPagerModes.NextPrevious))
            {
                if (String.IsNullOrEmpty(previousText))
                {
                    previousText = "Prev";
                }

                int page = currentPage == 0 ? 0 : currentPage - 1;

                var part = new TagBuilder("li")
                {
                    InnerHtml = GridLink(webGrid, webGrid.GetPageUrl(page), previousText)
                };

                if (currentPage == 0)
                {
                    part.MergeAttribute("class", "disabled");
                }

                li.Add(part);

            }


            if (ModeEnabled(mode, WebGridPagerModes.Numeric) && (totalPages > 1))
            {
                int last = currentPage + (numericLinksCount / 2);
                int first = last - numericLinksCount + 1;
                if (last > lastPage)
                {
                    first -= last - lastPage;
                    last = lastPage;
                }
                if (first < 0)
                {
                    last = Math.Min(last + (0 - first), lastPage);
                    first = 0;
                }
                for (int i = first; i <= last; i++)
                {

                    var pageText = (i + 1).ToString(CultureInfo.InvariantCulture);
                    var part = new TagBuilder("li")
                    {
                        InnerHtml = GridLink(webGrid, webGrid.GetPageUrl(i), pageText)
                    };

                    if (i == currentPage)
                    {
                        part.MergeAttribute("class", "active");
                    }

                    li.Add(part);

                }
            }

            if (ModeEnabled(mode, WebGridPagerModes.NextPrevious))
            {
                if (String.IsNullOrEmpty(nextText))
                {
                    nextText = "Next";
                }

                int page = currentPage == lastPage ? lastPage : currentPage + 1;

                var part = new TagBuilder("li")
                {
                    InnerHtml = GridLink(webGrid, webGrid.GetPageUrl(page), nextText)
                };

                if (currentPage == lastPage)
                {
                    part.MergeAttribute("class", "disabled");
                }

                li.Add(part);

            }

            if (ModeEnabled(mode, WebGridPagerModes.FirstLast))
            {
                if (String.IsNullOrEmpty(lastText))
                {
                    lastText = "Last";
                }

                var part = new TagBuilder("li")
                {
                    InnerHtml = GridLink(webGrid, webGrid.GetPageUrl(lastPage), lastText)
                };

                if (currentPage == lastPage)
                {
                    part.MergeAttribute("class", "disabled");
                }

                li.Add(part);

            }

            ul.InnerHtml = string.Join("", li);

            var html = "";
            if (explicitlyCalled && webGrid.IsAjaxEnabled)
            {
                var span = new TagBuilder("span");
                span.MergeAttribute("data-swhgajax", "true");
                span.MergeAttribute("data-swhgcontainer", webGrid.AjaxUpdateContainerId);
                span.MergeAttribute("data-swhgcallback", webGrid.AjaxUpdateCallback);

                span.InnerHtml = ul.ToString();
                html = span.ToString();

            }
            else
            {
                html = ul.ToString();
            }

            return new HelperResult(writer =>
            {
                writer.Write(html);
            });
        }

        private static String GridLink(WebGrid webGrid, string url, string text)
        {
            TagBuilder builder = new TagBuilder("a");
            builder.SetInnerText(text);
            builder.MergeAttribute("href", url  );
            if (webGrid.IsAjaxEnabled)
            {
                builder.MergeAttribute("data-swhglnk", "true");
            }
            return builder.ToString(TagRenderMode.Normal);
        }


        private static bool ModeEnabled(WebGridPagerModes mode, WebGridPagerModes modeCheck)
        {
            return (mode & modeCheck) == modeCheck;
        }
    }
    

}