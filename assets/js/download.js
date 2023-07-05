const htmldata = `

<table>
<tbody>
<tr>
<td>TN01</td>
<td>Chennai&nbsp;(Central):&nbsp;Ayanavaram</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN02</td>
<td>Chennai&nbsp;(North West):&nbsp;Anna Nagar</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN03</td>
<td>Chennai&nbsp;(North East):&nbsp;Tondiarpet</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN04</td>
<td>Chennai&nbsp;(East):&nbsp;Royapuram</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN05</td>
<td>Chennai&nbsp;(North):&nbsp;Kolathur</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN06</td>
<td>Chennai&nbsp;(South East):&nbsp;Mandavelli</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN07</td>
<td>Chennai&nbsp;(South):&nbsp;Adyar</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN09</td>
<td>Chennai&nbsp;(West):&nbsp;K. K. Nagar</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN10</td>
<td>Chennai&nbsp;(South West):&nbsp;Virugambakkam</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN11</td>
<td>Tambaram</td>
<td>RTO</td>
<td>Chengalpattu</td>
</tr>
<tr>
<td>TN12</td>
<td>Poonamallee</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN13</td>
<td>Ambattur</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN14</td>
<td>Sholinganallur</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN15</td>
<td>Ulundurpet</td>
<td>RTO</td>
<td>Kallakurichi</td>
</tr>
<tr>
<td>TN15Z</td>
<td>Kallakurichi</td>
<td>UO</td>
<td>Kallakurichi</td>
</tr>
<tr>
<td>TN16</td>
<td>Tindivanam</td>
<td>RTO</td>
<td>Villupuram</td>
</tr>
<tr>
<td>TN16Z</td>
<td>Gingee</td>
<td>UO</td>
<td>Villupuram</td>
</tr>
<tr>
<td>TN18</td>
<td>Red Hills</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN18Y</td>
<td>Gummidipoondi</td>
<td>UO</td>
<td>Tiruvallur</td>
</tr>
<tr>
<td>TN19</td>
<td>Chengalpattu</td>
<td>RTO</td>
<td>Chengalpattu</td>
</tr>
<tr>
<td>TN19Z</td>
<td>Madurantakam</td>
<td>UO</td>
<td>Chengalpattu</td>
</tr>
<tr>
<td>TN20</td>
<td>Tiruvallur</td>
<td>RTO</td>
<td>Tiruvallur</td>
</tr>
<tr>
<td>TN20X</td>
<td>Thiruthani</td>
<td>UO</td>
<td>Tiruvallur</td>
</tr>
<tr>
<td>TN21</td>
<td>Kanchipuram</td>
<td>RTO</td>
<td>Kanchipuram</td>
</tr>
<tr>
<td>TN22</td>
<td>Meenambakkam</td>
<td>RTO</td>
<td>Chennai</td>
</tr>
<tr>
<td>TN23</td>
<td>Vellore</td>
<td>RTO</td>
<td>Vellore</td>
</tr>
<tr>
<td>TN23T</td>
<td>Gudiyatham</td>
<td>UO</td>
<td>Vellore</td>
</tr>
<tr>
<td>TN24</td>
<td>Krishnagiri</td>
<td>RTO</td>
<td>Krishnagiri</td>
</tr>
<tr>
<td>TN25</td>
<td>Thiruvannamalai</td>
<td>RTO</td>
<td>Thiruvannamalai</td>
</tr>
<tr>
<td>TN27</td>
<td>Salem</td>
<td>Not In Use</td>
<td>Salem</td>
</tr>
<tr>
<td>TN28</td>
<td>Namakkal&nbsp;(North)</td>
<td>RTO</td>
<td>Namakkal</td>
</tr>
<tr>
<td>TN28Z</td>
<td>Rasipuram</td>
<td>UO</td>
<td>Namakkal</td>
</tr>
<tr>
<td>TN29</td>
<td>Dharmapuri</td>
<td>RTO</td>
<td>Dharmapuri</td>
</tr>
<tr>
<td>TN29W</td>
<td>Palacode</td>
<td>UO</td>
<td>Dharmapuri</td>
</tr>
<tr>
<td>TN29Z</td>
<td>Harur</td>
<td>UO</td>
<td>Dharmapuri</td>
</tr>
<tr>
<td>TN30</td>
<td>Salem&nbsp;(West)</td>
<td>RTO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN30W</td>
<td>Omalur</td>
<td>UO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN31</td>
<td>Cuddalore</td>
<td>RTO</td>
<td>Cuddalore</td>
</tr>
<tr>
<td>TN31Z</td>
<td>Panruti</td>
<td>UO</td>
<td>Cuddalore</td>
</tr>
<tr>
<td>TN32</td>
<td>Villupuram</td>
<td>RTO</td>
<td>Villupuram</td>
</tr>
<tr>
<td>TN33</td>
<td>Erode&nbsp;(East)</td>
<td>RTO</td>
<td>Erode</td>
</tr>
<tr>
<td>TN34</td>
<td>Tiruchengode</td>
<td>RTO</td>
<td>Namakkal</td>
</tr>
<tr>
<td>TN34Z</td>
<td>Kumarapalayam</td>
<td>UO</td>
<td>Namakkal</td>
</tr>
<tr>
<td>TN36</td>
<td>Gobichettipalayam</td>
<td>RTO</td>
<td>Erode</td>
</tr>
<tr>
<td>TN36W</td>
<td>Bhavani</td>
<td>UO</td>
<td>Erode</td>
</tr>
<tr>
<td>TN36Z</td>
<td>Sathyamangalam</td>
<td>UO</td>
<td>Erode</td>
</tr>
<tr>
<td>TN37</td>
<td>Coimbatore&nbsp;(South)</td>
<td>RTO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN37Z</td>
<td>Sulur</td>
<td>UO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN38</td>
<td>Coimbatore&nbsp;(North)</td>
<td>RTO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN39</td>
<td>Tirupur&nbsp;(North)</td>
<td>RTO</td>
<td>Tirupur</td>
</tr>
<tr>
<td>TN39Z</td>
<td>Avinashi</td>
<td>UO</td>
<td>Tirupur</td>
</tr>
<tr>
<td>TN40</td>
<td>Mettupalayam</td>
<td>RTO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN41</td>
<td>Pollachi</td>
<td>RTO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN41W</td>
<td>Valparai</td>
<td>UO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN42</td>
<td>Tirupur&nbsp;(South)</td>
<td>RTO</td>
<td>Tirupur</td>
</tr>
<tr>
<td>TN43</td>
<td>Ooty</td>
<td>RTO</td>
<td>Nilgiris</td>
</tr>
<tr>
<td>TN43Z</td>
<td>Gudalur</td>
<td>UO</td>
<td>Nilgiris</td>
</tr>
<tr>
<td>TN45</td>
<td>Tiruchirapalli&nbsp;(West)</td>
<td>RTO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN45Z</td>
<td>Manapparai</td>
<td>UO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN46</td>
<td>Perambalur</td>
<td>RTO</td>
<td>Perambalur</td>
</tr>
<tr>
<td>TN47</td>
<td>Karur</td>
<td>RTO</td>
<td>Karur</td>
</tr>
<tr>
<td>TN47X</td>
<td>Manmangalam</td>
<td>UO</td>
<td>Karur</td>
</tr>
<tr>
<td>TN47Y</td>
<td>Aravakurichi</td>
<td>UO</td>
<td>Karur</td>
</tr>
<tr>
<td>TN47Z</td>
<td>Kulithalai</td>
<td>UO</td>
<td>Karur</td>
</tr>
<tr>
<td>TN48</td>
<td>Srirangam</td>
<td>RTO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN48Z</td>
<td>Thuraiyur</td>
<td>UO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN48Y</td>
<td>Musiri</td>
<td>UO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN48X</td>
<td>Lalgudi</td>
<td>UO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN49</td>
<td>Thanjavur</td>
<td>RTO</td>
<td>Thanjavur</td>
</tr>
<tr>
<td>TN49Y</td>
<td>Pattukottai</td>
<td>UO</td>
<td>Thanjavur</td>
</tr>
<tr>
<td>TN50</td>
<td>Tiruvarur</td>
<td>RTO</td>
<td>Tiruvarur</td>
</tr>
<tr>
<td>TN50Y</td>
<td>Thiruthuraipoondi</td>
<td>UO</td>
<td>Tiruvarur</td>
</tr>
<tr>
<td>TN50Z</td>
<td>Mannargudi</td>
<td>UO</td>
<td>Tiruvarur</td>
</tr>
<tr>
<td>TN51</td>
<td>Nagapattinam</td>
<td>RTO</td>
<td>Nagapattinam</td>
</tr>
<tr>
<td>TN52</td>
<td>Sankagiri</td>
<td>RTO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN54</td>
<td>Salem&nbsp;(East)</td>
<td>RTO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN55</td>
<td>Pudukottai</td>
<td>RTO</td>
<td>Pudukottai</td>
</tr>
<tr>
<td>TN55Y</td>
<td>Illuppur</td>
<td>UO</td>
<td>Pudukottai</td>
</tr>
<tr>
<td>TN55Z</td>
<td>Aranthangi</td>
<td>UO</td>
<td>Pudukottai</td>
</tr>
<tr>
<td>TN56</td>
<td>Perundurai</td>
<td>RTO</td>
<td>Erode</td>
</tr>
<tr>
<td>TN57</td>
<td>Dindigul</td>
<td>RTO</td>
<td>Dindigul</td>
</tr>
<tr>
<td>TN57V</td>
<td>Vedasandur</td>
<td>RTO</td>
<td>Dindigul</td>
</tr>
<tr>
<td>TN57W</td>
<td>Batlagundu</td>
<td>RTO</td>
<td>Dindigul</td>
</tr>
<tr>
<td>TN58</td>
<td>Madurai&nbsp;(South)</td>
<td>RTO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN58Y</td>
<td>Usilampatti</td>
<td>UO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN58Z</td>
<td>Thirumangalam</td>
<td>UO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN59</td>
<td>Madurai&nbsp;(North)</td>
<td>RTO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN59V</td>
<td>Vadipatti</td>
<td>UO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN59Z</td>
<td>Melur</td>
<td>UO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN60</td>
<td>Theni</td>
<td>RTO</td>
<td>Theni</td>
</tr>
<tr>
<td>TN60Z</td>
<td>Uthamapalayam</td>
<td>UO</td>
<td>Theni</td>
</tr>
<tr>
<td>TN61</td>
<td>Ariyalur</td>
<td>RTO</td>
<td>Ariyalur</td>
</tr>
<tr>
<td>TN63</td>
<td>Sivaganga</td>
<td>RTO</td>
<td>Sivaganga</td>
</tr>
<tr>
<td>TN63Z</td>
<td>Karaikudi</td>
<td>UO</td>
<td>Sivaganga</td>
</tr>
<tr>
<td>TN64</td>
<td>Madurai&nbsp;(Central)</td>
<td>RTO</td>
<td>Madurai</td>
</tr>
<tr>
<td>TN65</td>
<td>Ramanathapuram</td>
<td>RTO</td>
<td>Ramanathapuram</td>
</tr>
<tr>
<td>TN65Z</td>
<td>Paramakudi</td>
<td>UO</td>
<td>Ramanathapuram</td>
</tr>
<tr>
<td>TN66</td>
<td>Coimbatore&nbsp;(Central)</td>
<td>RTO</td>
<td>Coimbatore</td>
</tr>
<tr>
<td>TN67</td>
<td>Virudhunagar</td>
<td>RTO</td>
<td>Virudhunagar</td>
</tr>
<tr>
<td>TN67W</td>
<td>Aruppukottai</td>
<td>UO</td>
<td>Virudhunagar</td>
</tr>
<tr>
<td>TN68</td>
<td>Kumbakonam</td>
<td>RTO</td>
<td>Thanjavur</td>
</tr>
<tr>
<td>TN69</td>
<td>Thoothukudi</td>
<td>RTO</td>
<td>Thoothukudi</td>
</tr>
<tr>
<td>TN70</td>
<td>Hosur</td>
<td>RTO</td>
<td>Krishnagiri</td>
</tr>
<tr>
<td>TN72</td>
<td>Tirunelveli</td>
<td>RTO</td>
<td>Tirunelveli</td>
</tr>
<tr>
<td>TN72V</td>
<td>Valliyur</td>
<td>UO</td>
<td>Tirunelveli</td>
</tr>
<tr>
<td>TN73</td>
<td>Ranipet</td>
<td>RTO</td>
<td>Ranipet</td>
</tr>
<tr>
<td>TN73Z</td>
<td>Arakkonam</td>
<td>UO</td>
<td>Ranipet</td>
</tr>
<tr>
<td>TN74</td>
<td>Nagercoil</td>
<td>RTO</td>
<td>Kanniyakumari</td>
</tr>
<tr>
<td>TN75</td>
<td>Marthandam</td>
<td>RTO</td>
<td>Kanniyakumari</td>
</tr>
<tr>
<td>TN76</td>
<td>Tenkasi</td>
<td>RTO</td>
<td>Tenkasi</td>
</tr>
<tr>
<td>TN76V</td>
<td>Ambasamudram</td>
<td>UO</td>
<td>Tirunelveli</td>
</tr>
<tr>
<td>TN77</td>
<td>Attur</td>
<td>RTO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN77Z</td>
<td>Vazhapadi</td>
<td>UO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN78</td>
<td>Dharapuram</td>
<td>RTO</td>
<td>Tirupur</td>
</tr>
<tr>
<td>TN78Z</td>
<td>Udumalpet</td>
<td>UO</td>
<td>Tirupur</td>
</tr>
<tr>
<td>TN79</td>
<td>Sankarankovil</td>
<td>RTO</td>
<td>Tenkasi</td>
</tr>
<tr>
<td>TN81</td>
<td>Tiruchirapalli&nbsp;(East)</td>
<td>RTO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN81Z</td>
<td>Thiruverumbur</td>
<td>UO</td>
<td>Tiruchirapalli</td>
</tr>
<tr>
<td>TN82</td>
<td>Mayiladuthurai</td>
<td>RTO</td>
<td>Mayiladuthurai</td>
</tr>
<tr>
<td>TN82Z</td>
<td>Sirkazhi</td>
<td>RTO</td>
<td>Mayiladuthurai</td>
</tr>
<tr>
<td>TN83</td>
<td>Vaniyambadi</td>
<td>RTO</td>
<td>Thirupattur</td>
</tr>
<tr>
<td>TN83Y</td>
<td>Ambur</td>
<td>UO</td>
<td>Thirupattur</td>
</tr>
<tr>
<td>TN83Z</td>
<td>Thirupattur</td>
<td>UO</td>
<td>Thirupattur</td>
</tr>
<tr>
<td>TN84</td>
<td>Srivilliputhur</td>
<td>RTO</td>
<td>Virudhunagar</td>
</tr>
<tr>
<td>TN85</td>
<td>Kundrathur</td>
<td>RTO</td>
<td>Kanchipuram</td>
</tr>
<tr>
<td>TN86</td>
<td>Erode&nbsp;(West)</td>
<td>RTO</td>
<td>Erode</td>
</tr>
<tr>
<td>TN87</td>
<td>Sriperumbudur</td>
<td>RTO</td>
<td>Kanchipuram</td>
</tr>
<tr>
<td>TN88</td>
<td>Namakkal&nbsp;(South)</td>
<td>RTO</td>
<td>Namakkal</td>
</tr>
<tr>
<td>TN88Z</td>
<td>Paramathi Velur</td>
<td>UO</td>
<td>Namakkal</td>
</tr>
<tr>
<td>TN90</td>
<td>Salem&nbsp;(South)</td>
<td>RTO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN91</td>
<td>Chidambaram</td>
<td>RTO</td>
<td>Cuddalore</td>
</tr>
<tr>
<td>TN91Y</td>
<td>Neyveli</td>
<td>UO</td>
<td>Cuddalore</td>
</tr>
<tr>
<td>TN91Z</td>
<td>Virudhachalam</td>
<td>UO</td>
<td>Cuddalore</td>
</tr>
<tr>
<td>TN92</td>
<td>Thiruchendur</td>
<td>RTO</td>
<td>Thoothukudi</td>
</tr>
<tr>
<td>TN93</td>
<td>Mettur</td>
<td>RTO</td>
<td>Salem</td>
</tr>
<tr>
<td>TN94</td>
<td>Palani</td>
<td>RTO</td>
<td>Dindigul</td>
</tr>
<tr>
<td>TN94Z</td>
<td>Oddanchatram</td>
<td>UO</td>
<td>Dindigul</td>
</tr>
<tr>
<td>TN95</td>
<td>Sivakasi</td>
<td>RTO</td>
<td>Virudhunagar</td>
</tr>
<tr>
<td>TN96</td>
<td>Kovilpatti</td>
<td>RTO</td>
<td>Thoothukudi</td>
</tr>
<tr>
<td>TN97</td>
<td>Arani</td>
<td>RTO</td>
<td>Tiruvannamalai</td>
</tr>
<tr>
<td>TN97Z</td>
<td>Cheyyar</td>
<td>UO</td>
<td>Tiruvannamalai</td>
</tr>
<tr>
<td>TN99</td>
<td>Coimbatore(West)</td>
<td>RTO</td>
<td>Coimbatore</td>
</tr>
</tbody>
<table/>`;

// console.log(htmldata);const doc = parser.parseFromString(htmlString);

const parser = new DOMParser();
const data = parser.parseFromString(htmldata, "text/html");

const tbody = data.getElementsByTagName("tbody")[0];

const tbodychilders = tbody.children;
const rtodata = [];

let id = 0;
[...tbody.children].forEach((record) => {
  rtodata.push({
    id: id,
    code: record.children[0].innerText,
    location: record.children[1].innerText,
    type:record.children[2].innerText,
    district: record.children[3].innerText,
  });

  id++;
});

console.log(rtodata);

function download(data,filename,type) {
  const aEl = document.createElement("a");
  const file = new Blob([JSON.stringify(data,null,2)], {
    type:type,
  });
  aEl.href = URL.createObjectURL(file);
  console.log(file, aEl.href);
  aEl.download = filename;
  aEl.click();
}

download(rtodata,"data.json","application/json");