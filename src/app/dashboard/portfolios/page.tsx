"use client";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import moment, { Moment } from "moment";
import LineChart from "@/app/ui/portfolios/linechart";

export default function Page() {
  let data : any[] = []
  const [stockData, setStockData] = useState(data);

  useEffect(() => {
    // Fetch the CSV file and parse it
    Papa.parse("./nav.csv", {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        setStockData(results.data);
      },
    });
  }, []);

  const calculatePercentage = (startValue: number, endValue: number) => {
    const percentage = ((endValue - startValue) / startValue) * 100;
    return percentage.toFixed(2);
  };

  const calculateYTDPercentage = (data: any[], symbol: any) => {
    const startDate = `01-01-${new Date().getFullYear()}`;
    const endDate = data[0]?.Date;
    if (symbol === "Close") {
      const startValue = data.find((row) => row.Date === startDate)?.Close;
      const endValue = data.find((row) => row.Date === endDate)?.Close;
      return calculatePercentage(startValue, endValue);
    } else {
      const startValue = data.find((row) => row.Date === startDate)?.Nifty50;
      const endValue = data.find((row) => row.Date === endDate)?.Nifty50;
      return calculatePercentage(startValue, endValue);
    }
  };

  const calculate1DPercentage = (data: any[], symbol: any) => {
    const startDate = data[1]?.Date;
    const endDate = data[0]?.Date;
    if (symbol === "Close") {
      const startValue = data.find((row) => row.Date === startDate)?.Close;
      const endValue = data.find((row) => row.Date === endDate)?.Close;
      return calculatePercentage(startValue, endValue);
    } else {
      const startValue = data.find((row) => row.Date === startDate)?.Nifty50;
      const endValue = data.find((row) => row.Date === endDate)?.Nifty50;
      return calculatePercentage(startValue, endValue);
    }
  };

  const calculate1WPercentage = (data: any[], symbol: any) => {
    const startDate = data[4]?.Date;
    const endDate = data[0]?.Date;
    if (symbol === "Close") {
      const startValue = data.find((row) => row.Date === startDate)?.Close;
      const endValue = data.find((row) => row.Date === endDate)?.Close;
      return calculatePercentage(startValue, endValue);
    } else {
      const startValue = data.find((row) => row.Date === startDate)?.Nifty50;
      const endValue = data.find((row) => row.Date === endDate)?.Nifty50;
      return calculatePercentage(startValue, endValue);
    }
  };

  const findDate = (data: any[], date: Moment) : any => {
    if (!data || data.length === 0) return null;
    const targetDate = date.format("MM-DD-yyyy");
    // Find the next available date in the CSV file
    const startDateRow = data.find((row) => row.Date === targetDate);
    if (startDateRow) {
      return startDateRow; // or handle the case accordingly
    } else {
      return findDate(data, date.date(date.date() - 1));
    }
  };

  const calculate1MPercentage = (data: any[], symbol: any) => {
    const target = moment();
    target.month(target.month() - 1);
    const startDateRow = findDate(data, target);
    if (!startDateRow) {
      return 0; // or handle the case accordingly
    }

    if (symbol === "Close") {
      const startValue = startDateRow?.Close;
      const endValue = data[0]?.Close;
      return calculatePercentage(startValue, endValue);
    } else {
      const startValue = startDateRow?.Nifty50;
      const endValue = data[0]?.Nifty50;
      return calculatePercentage(startValue, endValue);
    }
  };

  const calculate3MPercentage = (data: any[], symbol: any) => {
    const target = moment();
    target.month(target.month() - 3);
    const startDateRow = findDate(data, target);
    if (!startDateRow) {
      return 0; // or handle the case accordingly
    }

    if (symbol === "Close") {
      const startValue = startDateRow?.Close;
      const endValue = data[0]?.Close;
      return calculatePercentage(startValue, endValue);
    } else {
      const startValue = startDateRow?.Nifty50;
      const endValue = data[0]?.Nifty50;
      return calculatePercentage(startValue, endValue);
    }
  };

  const calculate6MPercentage = (data: any[], symbol: any) => {
    const target = moment();
    target.month(target.month() - 6);
    const startDateRow = findDate(data, target);
    if (!startDateRow) {
      return 0; // or handle the case accordingly
    }

    if (symbol === "Close") {
      const startValue = startDateRow?.Close;
      const endValue = data[0]?.Close;
      return calculatePercentage(startValue, endValue);
    } else {
      const startValue = startDateRow?.Nifty50;
      const endValue = data[0]?.Nifty50;
      return calculatePercentage(startValue, endValue);
    }
  };

  const calculate1YPercentage = (data: any[], symbol: any) => {
    const target = moment();
    target.year(target.year() - 1);
    const startDateRow = findDate(data, target);
    if (!startDateRow) {
      return 0; // or handle the case accordingly
    }

    if (symbol === "Close") {
      const startValue = startDateRow?.Close;
      const endValue = data[0]?.Close;
      return calculatePercentage(startValue, endValue);
    } else {
      const startValue = startDateRow?.Nifty50;
      const endValue = data[0]?.Nifty50;
      return calculatePercentage(startValue, endValue);
    }
  };

  const calculate3YPercentage = (data: any[], symbol: any) => {
    const target = moment();
    target.year(target.year() - 3);
    const startDateRow = findDate(data, target);
    if (!startDateRow) {
      return 0; // or handle the case accordingly
    }

    if (symbol === "Close") {
      const startValue = startDateRow?.Close;
      const endValue = data[0]?.Close;
      return calculatePercentage(startValue, endValue);
    } else {
      const startValue = startDateRow?.Nifty50;
      const endValue = data[0]?.Nifty50;
      return calculatePercentage(startValue, endValue);
    }
  };

  const calculateSIPercentage = (data: any[], symbol: any) => {
    const target = moment();
    target.year(target.year() - 3);
    const startDateRow = findDate(data, target);
    if (!startDateRow) {
      return 0; // or handle the case accordingly
    }

    if (symbol === "Close") {
      const startValue = data[data.length - 2]?.Close;
      const endValue = data[0]?.Close;
      return calculatePercentage(startValue, endValue);
    } else {
      const startValue = data[data.length - 2]?.Nifty50;
      const endValue = data[0]?.Nifty50;
      return calculatePercentage(startValue, endValue);
    }
  };

  const calculateMaxDrawdown = (data: any[], symbol: any) => {
    // Calculate the wealth index
    let initialPrice = 0;
    let wealthIndex: any[] = [];
    if (symbol === "Close") {
      initialPrice = data[data.length - 2]?.Close;
      wealthIndex = data.map(
        (row: { Close: number }) => row.Close / initialPrice
      );
    } else {
      initialPrice = data[data.length - 2]?.Nifty50;
      wealthIndex = data.map(
        (row: { Nifty50: number }) => row.Nifty50 / initialPrice
      );
    }

    // Find the previous peaks
    const previousPeaks = [];
    let previousPeak = 1;

    for (let i = wealthIndex.length - 2; i >= 0; i--) {
      if (wealthIndex[i] > previousPeak) {
        previousPeaks.push(previousPeak);
        previousPeak = wealthIndex[i];
      }
    }
    previousPeaks.push(previousPeak);

    // Calculate the drawdowns
    const drawdowns = [];
    for (let i = wealthIndex.length - 2; i >= 0; i--) {
      const previousPeak = previousPeaks.find(
        (peak, index) =>
          index === previousPeaks.length - 1 || peak >= wealthIndex[i]
      );
      const drawdown = (wealthIndex[i] - previousPeak!) / previousPeak!;
      drawdowns.push(drawdown);
    }

    // Find the maximum drawdown
    const maxDrawdown = Math.min(...drawdowns);
    return (maxDrawdown * 100).toFixed(2);
  };

  const calculateDrawdown = (data: any[], symbol: any) => {
    // Calculate the wealth index
    let initialPrice = 0;
    let wealthIndex: any[] = [];
    if (symbol === "Close") {
      initialPrice = data[data.length - 2]?.Close;
      wealthIndex = data.map(
        (row: { Close: number }) => row.Close / initialPrice
      );
    } else {
      initialPrice = data[data.length - 2]?.Nifty50;
      wealthIndex = data.map(
        (row: { Nifty50: number }) => row.Nifty50 / initialPrice
      );
    }

    // Find the previous peaks
    const previousPeaks = [];
    let previousPeak = 1;

    for (let i = wealthIndex.length - 2; i >= 0; i--) {
      if (wealthIndex[i] > previousPeak) {
        previousPeaks.push(previousPeak);
        previousPeak = wealthIndex[i];
      }
    }
    previousPeaks.push(previousPeak);

    // Calculate the drawdowns
    const drawdowns = [];
    for (let i = wealthIndex.length - 2; i >= 0; i--) {
      const previousPeak = previousPeaks.find(
        (peak, index) =>
          index === previousPeaks.length - 1 || peak >= wealthIndex[i]
      );
      const drawdown = (wealthIndex[i] - previousPeak!) / previousPeak!;
      drawdowns.push(drawdown);
    }

    return (drawdowns[1] * 100).toFixed(2);
  };

  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>Portfolio</h1>
      <div className="mt-6 grid grid-cols-1">
        <h1 className={` mb-4 text-lg md:text-xl`}>Trailing returns</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-1">
          {/* create a table in tailwind */}
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          YTD
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          1D
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          1W
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          1M
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          3M
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          6M
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          1Y
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          3Y
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          SI
                        </th>
                        <th
                          scope="col"
                          className="pl-20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          DD
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          MAXDD
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                Quant Active Fund Gr
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculateYTDPercentage(stockData, "Close") ||
                                  0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate1DPercentage(stockData, "Close") || 0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate1WPercentage(stockData, "Close") || 0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate1MPercentage(stockData, "Close") || 0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate3MPercentage(stockData, "Close") || 0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate6MPercentage(stockData, "Close") || 0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate1YPercentage(stockData, "Close") || 0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate3YPercentage(stockData, "Close") || 0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculateSIPercentage(stockData, "Close") || 0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="pl-20 px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculateDrawdown(stockData, "Close") || 0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculateMaxDrawdown(stockData, "Close") || 0}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                Nifty50
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculateYTDPercentage(stockData, "Nifty50") ||
                                  0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate1DPercentage(stockData, "Nifty50") ||
                                  0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate1WPercentage(stockData, "Nifty50") ||
                                  0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate1MPercentage(stockData, "Nifty50") ||
                                  0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate3MPercentage(stockData, "Nifty50") ||
                                  0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate6MPercentage(stockData, "Nifty50") ||
                                  0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate1YPercentage(stockData, "Nifty50") ||
                                  0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculate3YPercentage(stockData, "Nifty50") ||
                                  0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculateSIPercentage(stockData, "Nifty50") ||
                                  0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="pl-20 px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculateDrawdown(stockData, "Nifty50") || 0}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {calculateMaxDrawdown(stockData, "Nifty50") ||
                                  0}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-1">
          <div>
            <LineChart />
          </div>
        </div>
      </div>
    </main>
  );
}
